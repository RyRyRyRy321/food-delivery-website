
export function LoginModal() {
    return (
        <div>
            <img></img>
            <h2>Sign In</h2>

            <Form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button type="submit">Login</button>
            </Form>

            <span>Sign in with:</span>

            <div>
                <button>
                    <svg></svg>
                </button>

                <button>
                    <svg></svg>
                </button>
                <button>
                    <svg></svg>
                </button>
            </div>

            <button>Create a New Account</button>
        </div>


    );
}