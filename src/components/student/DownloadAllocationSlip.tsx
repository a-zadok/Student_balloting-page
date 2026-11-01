"use client";

import { Printer } from "lucide-react";

const allocationDetails = [
  ["Student", "Tola Ade"],
  ["Matric Number", "240101113"],
  ["Block", "Block 2"],
  ["Floor", "2nd Floor"],
  ["Room type", "Small room (4-bedded)"],
];

function escapePdfText(value: string) {
  return value
    .replace(/[^\x20-\x7e]/g, "")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function createAllocationSlipPdf() {
  const commands = [
    "0.04 0.11 0.29 rg",
    "50 755 495 36 re f",
    "BT /F1 16 Tf 1 1 1 rg 68 768 Td (College of Medicine, University of Lagos) Tj ET",
    "0 0 0 rg",
    "BT /F1 20 Tf 50 710 Td (Accommodation Allocation Slip) Tj ET",
    "BT /F1 11 Tf 50 685 Td (Payment status: PAID - DEMO CONFIRMATION) Tj ET",
    "50 660 495 1 re f",
  ];

  let y = 630;
  for (const [label, value] of allocationDetails) {
    commands.push(
      `BT /F1 12 Tf 50 ${y} Td (${escapePdfText(label)}) Tj ET`,
      `BT /F1 12 Tf 310 ${y} Td (${escapePdfText(value)}) Tj ET`,
      `50 ${y - 14} 495 0.6 re f`,
    );
    y -= 48;
  }

  commands.push(
    `BT /F1 10 Tf 50 ${y - 16} Td (This is a demo allocation slip. Payment has not been processed.) Tj ET`,
  );
  const stream = `${commands.join("\n")}\n`;
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${new TextEncoder().encode(stream).length} >>\nstream\n${stream}endstream`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (let index = 0; index < objects.length; index += 1) {
    offsets.push(new TextEncoder().encode(pdf).length);
    pdf += `${index + 1} 0 obj\n${objects[index]}\nendobj\n`;
  }

  const xrefOffset = new TextEncoder().encode(pdf).length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets.slice(1)) {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return new Blob([new TextEncoder().encode(pdf)], { type: "application/pdf" });
}

export default function DownloadAllocationSlip() {
  function downloadSlip() {
    const url = URL.createObjectURL(createAllocationSlipPdf());
    const link = document.createElement("a");
    link.href = url;
    link.download = "accommodation-allocation-slip.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#061d49] px-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#0a2b67] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061d49]"
      onClick={downloadSlip}
      type="button"
    >
      <Printer aria-hidden="true" className="h-4 w-4" />
      Print allocation slip
    </button>
  );
}
