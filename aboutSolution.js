```javascript
// pages/about.js

export async function getServerSideProps() {
  // Access environment variables here
  const myVariable = process.env.MY_VARIABLE;

  return {
    props: {
      myVariable,
    },
  };
}

export default function About({ myVariable }) {
  console.log(myVariable); // Access the variable here
  return (
    <div>About Page. The environment variable is: {myVariable}</div>
  );
}
```