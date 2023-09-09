import { BaseModal } from "../base-modal";

export function LoginModal({ isOpen = false, onClose = () => {console.log("Hello world")} }) {
    
    return (
        <BaseModal open={isOpen} onClose={onClose} children={<LoginContent></LoginContent>}></BaseModal>
    );
}

function LoginContent() {
    return (
        <div className="flex flex-col justify-center p-2">
            <div className="flex flex-col justify-center items-center">
                <img className="w-16 h-16 border m-2"></img>
                <h2 className="text-center font-bold">Sign In</h2>
            </div>

            <LoginForm></LoginForm>

            <div className="flex flex-col justify-center">
                <span className="text-center">Sign in with:</span>

                <div className="flex flex-row space-x-1 justify-center">

                    <button>
                        <svg className="border" width="32px" height="32px"></svg>
                    </button>

                    <button>
                        <svg className="border" width="32px" height="32px"></svg>
                    </button>
                    <button>
                        <svg className="border" width="32px" height="32px"></svg>
                    </button>
                </div>
            </div>

            <div className="mb-32"></div>



            <button>Create a New Account</button>
        </div>
    );
}

function LoginForm(){

    const defaultSubmitFunction = (event) => {
        event.preventDefault();
    }

    
    return (
            <form onSubmit={defaultSubmitFunction}>
                <div className="flex flex-col m-2">
                    <input className="m-1 border rounded" type="email" placeholder="Email" />
                    <input className="m-1 border rounded" type="password" placeholder="Password" />
                </div>

                <div className="flex flex-row justify-end">
                    <button className="border rounded m-2" type="submit">Login</button>
                </div>
            </form>
    );
}