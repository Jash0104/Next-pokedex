import { ChangeEvent } from "react";


export default function FormPage() {
  
  const handleChangeNames = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    console.log({ name, value });
  }
  
    return (
    <div className="flex items-center justify-center p-12 h-full">
        <div className="mx-auto w-full max-w-[550px] p-10 bg-slate-300 rounded-md">
            <form>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        First Name
                        </label>
                        <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="First Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Last Name
                        </label>
                        <input
                        type="text"
                        name="lName"
                        id="lName"
                        placeholder="Last Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                Age
                </label>
                <input
                    type="number"
                    name="guest"
                    id="guest"
                    placeholder="5"
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Confirm password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center">
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
                </button>
            </div>
            </form>
        </div>
    </div>
  );
}