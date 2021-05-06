// this is higher order comp - hoc
// hoc is going to return props children it gets
// can return multiple children tags also
// naming convention -- begin with 'With' prefix in its filename
// it's a wrapper comp that doesn't render any JSX on its own

const WithLastLogin = (props) => props.children;

export default WithLastLogin;