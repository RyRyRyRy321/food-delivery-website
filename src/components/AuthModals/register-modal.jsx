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
                <h2 className="text-center font-bold">Sign Up</h2>
            </div>

            <RegisterForm></RegisterForm>

            <div className="mb-32"></div>
            
            <div className="flex flex-col justify-center items-center">
                <span>Already have an Account?</span>
                <button>Sign In</button>
            </div>
        </div>
    );
}

function RegisterForm() {
    return (
        <form>
            <div className="flex flex-col m-2 space-y-2">
                <input className="w-64 border rounded p-2" type="email" placeholder="Email" />
                <input className="w-64 border rounded p-2" type="password" placeholder="Password" />
                <input className="w-64 border rounded p-2" type="password" placeholder="Confirm Password" />

                <div className="flex flex-row justify-end">
                    <button className="border rounded-2xl p-2" type="submit">Register</button>
                </div>
            </div>


        </form>
    );
}

