const args = process.argv.slice(2);

const findValue = (valueName) =>{
    const arg = args.find(arg => arg.startsWith(`--${valueName}=`));
    return arg ? arg.split('=')[1] : null;
}


const emailSYS = findValue('email') || process.env.EMAIL;
const passwordSYS = findValue('password') || process.env.PASSWORD;

console.log(`Email: ${emailSYS}, Password: ${passwordSYS}`);