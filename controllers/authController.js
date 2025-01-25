const Doctor = require('../models/doctorModel');
const { generateToken } = require('../utils/jwtHelper');

const loginHandler = async (req, res) => {
    const { username, password } = req.body;

    try {
        const doctor = await Doctor.findOne({ username });
        if (!doctor) {
            return res.status(404).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await doctor.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = generateToken({
            doctorId: doctor._id.toString(),
            username: doctor.username
        });        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

const registerHandler = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newDoctor = new Doctor({ username, email, password });
        await newDoctor.save();
        res.status(201).json({ message: 'Doctor registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering doctor', error });
    }
};

module.exports = { loginHandler, registerHandler };
