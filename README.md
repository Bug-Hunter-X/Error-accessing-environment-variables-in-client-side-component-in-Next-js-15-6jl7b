# Next.js 15 Environment Variable Access Error
This repository demonstrates a common error when working with environment variables in Next.js 15 applications.  The issue arises when attempting to access environment variables within a client-side component, where the `process` global object is not defined.

## Problem
The `about.js` file attempts to access the environment variable `MY_VARIABLE` using `process.env.MY_VARIABLE`. This causes an error in the browser because the `process` object is not available in the client-side environment. 

## Solution
The solution involves moving environment variable access to the server-side.
