import React from 'react'

function contact() {
    return (
        <>
            <div class="font-sans text-base text-gray-900 sm:px-10 mt-10">
                <div class="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
                    <form class="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
                        <div class="mb-4"><label class="text mb-2 block font-medium" for="email">Your Name :</label><input class="w-full rounded border border-gray-300 px-3 py-2 " id="email" type="email" required="" /></div>

                        <div class="mb-4"><label class="text mb-2 block font-medium" for="email">Your e-mail :</label><input class="w-full rounded border border-gray-300 px-3 py-2 " id="email" type="email" required="" /></div>
                        <div class="mb-4"><label class="text mb-2 block font-medium" for="email">Your Phone :</label><input class="w-full rounded border border-gray-300 px-3 py-2 " id="email" type="email" required="" /></div>
                        <div class="mb-4"><label class="text mb-2 block font-medium" for="subject">Subject :</label><input class="w-full rounded border border-gray-300 px-3 py-2 " id="subject" type="subject" required="" /></div>
                        <div class="mb-4"><label class="text mb-2 block font-medium" for="message">Message :</label><textarea class="h-52 w-full rounded border border-gray-300 px-3 py-2 " id="message" required=""></textarea></div>
                        <div class="flex items-center">
                            <div class="flex-1"></div>
                            <button class="rounded-xl bg-[#2db34a] px-4 py-3 text-center font-bold text-white hover:bg-blue-700" type="submit">Send message</button>
                        </div>
                    </form>
                    <div class="mt-10 bg-[#2db34a] px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
                        <div class="">
                            <p class="mb-4 font-medium border-b  pb-2">OFFICE HOURS</p>
                            <p class="mb-4">Monday – Thursday: 08:00 – 16:00</p>
                            <p class="mb-4">Friday: 08:00 - 15:00</p>
                            <p class="mb-4">Weekend: Closed</p>
                            <p class="mb-4">
                                Email:
                                <a href="#" class="font-semibold underline">support@apps.io</a>
                            </p>
                            <p class="mb-4">
                                Phone:
                                <a href="#" class="font-semibold underline">+46 (0) 10-32 32 322</a>
                            </p>
                            <hr class="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
                            <p class="mb-4">Org.no: 63452-2832</p>
                            <p class="mb-4">VAT no: 32353</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default contact