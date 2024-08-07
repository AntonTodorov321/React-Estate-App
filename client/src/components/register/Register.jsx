export default function Register() {
    return (
        <div class="container">
            <div class="loginBox">
                <h2 class="title">Register</h2>
                <form>
                    <div class="inputGroup">
                        <label for="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            class="input"
                        />
                    </div>

                    <div class="inputGroup">
                        <label for="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            class="input"
                        />
                    </div>

                    <div class="inputGroup">
                        <label for="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            class="input"
                        />
                    </div>

                    <div class="inputGroup">
                        <label for="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            class="input"
                        />
                    </div>

                    <button type="button" class="button">Register</button>
                </form>
            </div>
        </div>
    )
}