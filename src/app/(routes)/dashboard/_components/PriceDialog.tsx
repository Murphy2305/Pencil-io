import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

function PricingDialog() {
  return (
    <DialogContent className="max-w-4xl bg-white dark:bg-gray-900 dark:text-gray-200 border dark:border-gray-700">
      <DialogHeader>
        <DialogTitle className="text-gray-900 dark:text-gray-100">Upgrade Plan</DialogTitle>
        <DialogDescription>
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
              {/* Professional Plan */}
              <div className="rounded-2xl border border-indigo-600 dark:border-indigo-500 p-6 shadow-sm ring-1 ring-indigo-600 dark:ring-indigo-500 sm:order-last sm:px-8 lg:p-12 dark:bg-gray-800">
                <div className="text-center">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Professional
                  </h2>
                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
                      4.99$
                    </strong>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-400">/month</span>
                  </p>
                </div>
                <ul className="mt-6 space-y-2">
                  {[
                    "Everything included in free, plus:",
                    "Unlimited Team Files",
                    "Exclusive access to Tubeguruji.com content",
                    "More document features",
                    "Email Support",
                    "Instagram support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-700 dark:text-indigo-400"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://www.buymeacoffee.com/tubegurujiw/membership"
                  className="mt-8 block rounded-full border border-indigo-600 dark:border-indigo-500 bg-indigo-600 dark:bg-indigo-500 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Upgrade
                </Link>
              </div>

              {/* Free Plan */}
              <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm sm:px-8 lg:p-12 dark:bg-gray-800">
                <div className="text-center">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Free</h2>
                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
                      Free
                    </strong>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-400">/month</span>
                  </p>
                </div>
                <ul className="mt-6 space-y-2">
                  {["5 Team files", "Limited Access to Tubeguruji.com", "Limited Document feature", "Email Support"].map(
                    (feature, index) => (
                      <li key={index} className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 text-indigo-700 dark:text-indigo-400"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
                <a
                  href="#"
                  className="mt-8 block rounded-full border border-indigo-600 dark:border-indigo-500 bg-white dark:bg-gray-900 px-12 py-3 text-center text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild></DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

export default PricingDialog;
