import { Link } from "react-router-dom";
import Button from "./Button";

export default function LoginForm({ data, handleInputLogin, handleLogin }) {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg g-10 pt-10">
      <div className="g-10">
        <form onSubmit={handleLogin}>
          <div className="flex justify-center pb-12">
            <h1 className="text-4xl font-semibold leading-7 text-gray-900">
              Login
            </h1>
          </div>
          <div className="w-full">
          <div className="mt-10">
            <label
              htmlFor="email"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={handleInputLogin}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={handleInputLogin}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-10 content-end text-end">
          <Button name={"Login"} />
          <p className="font-semibold">Don't have an account? <Link className="text-xl text-blue-500 font-bold text-end" to="/register">Create the new one</Link></p>

          </div>
          <div className=" mt-5">
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}
