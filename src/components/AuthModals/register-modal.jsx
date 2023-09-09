import { BaseModal } from "../base-modal";

export function RegisterModal() {
    return (<></>
    );
}

function RegisterContent() {
    return (
        <div>
            <img></img>
            <h2>Sign In</h2>

            <Form>

            </Form>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />


            <button type="submit">Register</button>


            <span>Already have an Account?</span>
            <button>Sign In</button>
        </div>
    );
}