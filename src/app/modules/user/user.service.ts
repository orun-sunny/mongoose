import User from "./user.model";

export const createUserToDB = async () => {
    const user = new User(
        {
            id: '7২1',
            role: "student",
            password: 'jakanaka',
            name: {
                firstName: 'mr তেস',
                middleName: 'x',
                lastName: 'mukut',

            },

            gender: "male",
            email: 'sunny@gmail.com',
            contactNo: '01755668855',
            emergencyContactNo: '01856698546',
            presentAddress: 'uganda',
            permanentAddress: 'usa',

        }
    );
    await user.save();
    console.log(user);

};