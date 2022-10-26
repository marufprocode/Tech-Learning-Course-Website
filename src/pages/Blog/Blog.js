import React from "react";
import { Link } from "react-router-dom";
import ArticleSlicer from "./ArticleSlicer";

const Blog = () => {
  return (
    <div className="">
      <div className="bg-gray-100 min-h-screen text-gray-700 py-10">
        {/* blog One  */}
        <div className="container overflow-hidden max-w-4xl my-10 mx-auto rounded-lg shadow-sm bg-emerald-200">
          <img src="https://getkt.com/wp-content/uploads/2019/02/Cross-Origin-Resource-Sharing.jpg" alt="imageJS" className="h-[300px] w-full mb-5"/>
          <div className="blog-body px-10 pt-1 pb-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Jun 26, 2022</span>
            <Link to ="/#"
              className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900"
            >
              CORS
            </Link>
          </div>
          <div className="mt-3">
            <Link to ="/#"
              className="text-2xl font-bold hover:underline"
            >
              What is Cors?
            </Link>
            <p className="mt-2">
            Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
            </p>
          </div>
          <div className="flex items-center justify-end mt-4">
            <div>
              <Link to="/#"
                className="flex items-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline text-gray-700">
                  Maruf Chowdhury
                </span>
              </Link>
            </div>
          </div>
          </div>
        </div>
        {/* Blog Two  */}
        <div className="container overflow-hidden max-w-4xl my-10 mx-auto rounded-lg shadow-sm bg-emerald-200">
          <img src="https://miro.medium.com/max/1400/1*oV5dEy7dadIYpj3cqwZtUg.png" alt="imageJS" className="h-[300px] w-full mb-5"/>
          <div className="blog-body px-10 pt-1 pb-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Jun 28, 2022</span>
            <Link to ="/#"
              className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900"
            >
              FireBase
            </Link>
          </div>
          <div className="mt-3">
            <Link to ="/#"
              className="text-2xl font-bold hover:underline"
            >
              Why are you using Firebase? What are the other options do you have to implement authentication? 
            </Link>
            <p className="mt-2">
            There are definitely have great advantages to consider using Firebase Authentication. The reason I'm using firebase is- <br />
            - Save time on developing Webservice methods for authentication. <br />
            - Easy sign-in with any platform <br />
            - Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users <br />
            - It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. <br />
            But since user data is a lot more serious than wasting a pepperoni pizza, let’s check out some user authentication platforms. And while an average business person will straightaway run towards Auth0 or Firebase, there are others as well. <br />
            <span className="font-bold">1. Stytch: </span> STYTCH is a staunch supporter of password-less authentication. It is focused on improving user experience and cutting developer headaches by doing just that. <br />
            <span className="font-bold">2. Ory: </span> Ory brings complete user experience control with its headless user authentication management.<br />
            <span className="font-bold">3. Supabase: </span> Supabase calls itself an open-source Firebase alternative. Supabase also has user management and authorization mechanisms to implement granular access rules.<br />
            <span className="font-bold">4. Okta: </span> Okta is again a flagbearer of password-less security. However, you can ask for the strongest passwords with Okta as well.<br />
            <span className="font-bold">5. Keycloak: </span>Keycloak is an open-source user identity and access management platform.<br />
            <span className="font-bold">6. Authress: </span>With its long list of features, Authress seems a brilliant user authentication and a Firebase alternative.<br />
            <span className="font-bold">7. Auth0: </span>Auth0 is the go-to user authentication platform and a Firebase alternative for good reasons.<br />
            <span className="font-bold">8. OneLogin: </span>OneLogin by OneIdentity is yet another Firebase alternative with noteworthy advanced features.<br />

            </p>
          </div>
          <div className="flex items-center justify-end mt-4">
            <div>
              <Link to="/#"
                className="flex items-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline text-gray-700">
                  Maruf Chowdhury
                </span>
              </Link>
            </div>
          </div>
          </div>
        </div>
        {/* Blog Three  */}
        <div className="container overflow-hidden max-w-4xl my-10 mx-auto rounded-lg shadow-sm bg-emerald-200">
          <img src="https://blog.adnanhalilovic.com/wp-content/uploads/2022/09/Protect-Routes-in-React.jpg" alt="imageJS" className="h-[300px] w-full mb-5"/>
          <div className="blog-body px-10 pt-1 pb-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Jun 1, 2020</span>
            <Link to ="/#"
              className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900"
            >
              Private Route
            </Link>
          </div>
          <div className="mt-3">
            <Link to ="/#"
              className="text-2xl font-bold hover:underline"
            >
              How does the private route works?
            </Link>
            <p className="mt-2">
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. <br />
            If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). <br />
            How we can save the state the users comes from and requesting to get based on that we an redirects the users to the requested page after authenticated by replacing navigation. 
            </p>
          </div>
          <div className="flex items-center justify-end mt-4">
            <div>
              <Link to="/#"
                className="flex items-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline text-gray-700">
                  Maruf Chowdhury
                </span>
              </Link>
            </div>
          </div>
          </div>
        </div>
        {/* Blog Four */}
        <div className="container overflow-hidden max-w-4xl my-10 mx-auto rounded-lg shadow-sm bg-emerald-200">
          <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/node-js-logo.png?fit=1200%2C600&ssl=1" alt="imageJS" className="h-[300px] w-full mb-5"/>
          <div className="blog-body px-10 pt-1 pb-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Jun 1, 2020</span>
            <Link to ="/#"
              className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900"
            >
              Node.js
            </Link>
          </div>
          <div className="mt-3">
            <Link to ="/#"
              className="text-2xl font-bold hover:underline"
            >
              What is Node? How does Node Works?
            </Link>
            <p className="mt-2">
            Node is an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. 
            <span className="font-bold">How does it work?</span>
            First of all just like other languages node comes with packages and modules. These are libraries of functions that we can import from npm (node package manager) into our code and utilize. If you have node installed on your computer, then you already have some basic modules installed. These are how we create a simple server, but I'll get to that later. <br /> <br />
            If you are familiar with JavaScript, then you know it is asynchronous and single threaded. The single thread is the event loop which is responsible for running all functions and requests. The asynchronous behavior is extremely important when using node, because it guarantees that the event loop is never blocked by a synchronous function. <br /> <br />
            Even though there is only one event loop, when a request is made the loop passes the request to an asynchronous function which does the work. When this function is done and a response is returned, it can then be passed back to the event loop to be executed by the callback and sent to the user. If the functions were synchronous then the event loop would get locked up with one clients request and response, and all other clients would have to wait till that client was done. Because of the the asynchronous nature of JavaScript, the applications using node can handle many requests happening at the same time. This means that when programming in Node.js it is important to always keep in mind that the functions being written are not synchronous. It is also very important to catch errors on the server before it is passed back to the client. This prevents any errors from getting to the event loop which could crash the program and all clients would suffer.
            </p>
          </div>
          <div className="flex items-center justify-end mt-4">
            <div>
              <Link to="/#"
                className="flex items-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline text-gray-700">
                  Maruf Chowdhury
                </span>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
