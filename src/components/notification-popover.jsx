import { Popover } from "@headlessui/react";
import { BsFillBellFill } from "react-icons/bs";

export function NotificationPopOver() {
    return (
        <Popover>
            <Popover.Button>
                <BsFillBellFill className="w-5 h-5"></BsFillBellFill>
            </Popover.Button>

            <Popover.Panel className="absolute -translate-x-full z-10 m-3">
                <div className="max-h-96 rounded shadow flex flex-col bg-white-100 p-2 space-y-1 overflow-y-auto">
                    <NotificationBox></NotificationBox>
                </div>
            </Popover.Panel>
        </Popover>
    );
}

function NotificationBox(){
    return (
        <div className="w-56 flex flex-col border rounded bg-white-100 shadow justify-center space-x-1 p-2">

                        <div className="flex flex-col w-full">
                            <span className="text-base font-bold">This is a notification</span>
                            <span className="text-xs font-bold text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                        </div>

                    </div>
    );
}