"use client";
import "./header.css";
import {Dialog, Transition} from '@headlessui/react'
import {useState, Fragment} from 'react'
import Image from "next/image";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function playShitMusic() {
        const audio = new Audio('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-50124e5b-9499-4a7a-ac9b-8a61bcdb0fee/a0437405-91a5-48c9-8d00-de7c0c1e625b.mp3');
        audio.play().then(r => console.log(r));
        setIsOpen(false)
    }

    return (<>
        <Transition appear show={isOpen}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="card w-full max-w-md transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                                >
                                    <div className="card_head">
                                        <div className="text-center"><b>ん？</b></div>
                                    </div>
                                </Dialog.Title>
                                <div className="card_area mt-2 p-2 text-center">
                                    <p className="text-xl text-gray-500">
                                        <p>音 量 注 意</p>
                                        <p>VOLUME ATTENTION</p>
                                    </p>
                                </div>

                                <div className="mt-2 text-center mb-2">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center border bg-gray-100 p-1 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                        onClick={playShitMusic}
                                    >
                                        CONTINUE
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
        <div className="logo_head-div">
            <div className="logo_head" onClick={openModal}></div>
        </div>
        <div className="header">
            <div><Image src="/background/back-2.png" alt="" width={1024} height={160}/></div>
        </div>
        <div className="header-title">
            <div
                className="web-font">田所浩二
            </div>
        </div>
    </>)
}