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
                <img className="w-16 h-16 border m-2"></img>
                <h2 className="text-center font-bold">Sign Up</h2>
            </div>

            <RegisterForm></RegisterForm>

            <div className="mb-32"></div>

            <span>Already have an Account?</span>
            <button>Sign In</button>
        </div>
    );
}

function RegisterForm() {
    return (
        <form>
            <div className="flex flex-col m-2">
                <input className="m-1 border rounded" type="email" placeholder="Email" />
                <input className="m-1 border rounded" type="password" placeholder="Password" />
                <input className="m-1 border rounded" type="password" placeholder="Confirm Password" />
            </div>

            <div className="flex flex-row justify-end">
                <button className="border rounded m-2" type="submit">Register</button>
            </div>
        </form>
    );
}

