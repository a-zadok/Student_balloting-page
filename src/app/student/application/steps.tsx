import { Check } from "lucide-react";

export function ApplicationSteps({ activeStep }: { activeStep: 1 | 2 | 3 }) {
  const steps = ["Instructions", "Room Allocation", "Payment & Confirmation"];

  return (
    <ol
      aria-label="Accommodation application progress"
      className="grid grid-cols-3 rounded-xl border border-slate-200 bg-white px-3 py-4 shadow-sm sm:px-7"
    >
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const active = stepNumber === activeStep;
        const completed = stepNumber < activeStep;

        return (
          <li
            key={step}
            aria-current={active ? "step" : undefined}
            className={`flex items-center justify-center gap-2 text-center text-xs sm:gap-3 sm:text-sm ${
              active ? "font-semibold text-[#10284f]" : "text-slate-500"
            }`}
          >
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                active ? "bg-[#061d49] text-white" : "bg-[#edf0fb] text-slate-800"
              }`}
            >
              {completed ? (
                <Check aria-hidden="true" className="h-3.5 w-3.5" />
              ) : (
                stepNumber
              )}
            </span>
            <span>{step}</span>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="ml-1 hidden h-px flex-1 bg-[#dbe5f4] sm:block"
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
