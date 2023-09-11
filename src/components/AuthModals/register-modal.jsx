import { BaseModal } from "../base-modal";

export function RegisterModal({ isOpen, onClose }) {
    return (
        <BaseModal open={isOpen} children={<RegisterContent></RegisterContent>} onClose={onClose} >
        </BaseModal>
    );
}

function RegisterContent() {
    return (
        <div className="flex flex-col justify-center p-2">
            <div className="flex flex-col justify-center items-center">
                <img className="w-16 h-16 rounded-full border m-2"></img>
                <h2 className="text-black-100 text-center font-bold">Sign Up</h2>
            </div>

            <div className="mb-12"></div>

            <RegisterForm></RegisterForm>

            <div className="mb-32"></div>
            
            <div className="flex flex-col justify-center items-center">
                <span className="text-black-100">Already have an Account?</span>
                <button className="text-black-100">Sign In</button>
            </div>
        </div>
    );
}

function RegisterForm() {

    const defaultSubmitFunction = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={defaultSubmitFunction}>
            <div className="flex flex-col m-2 space-y-2">
                <input className="w-64 border rounded p-2" type="email" placeholder="Email" />
                <input className="w-64 border rounded p-2" type="password" placeholder="Password" />
                <input className="w-64 border rounded p-2" type="password" placeholder="Confirm Password" />

                <button className="shadow rounded-2xl text-white-100 bg-green-100 hover:bg-green-101 font-bold p-1" type="submit">Register</button>
            </div>


        </form>
    );
}

