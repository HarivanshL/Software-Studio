import PersonBioModel from "../models/PersonBio.model";
import sidImage from "../../assets/sid.jpg";


const getAllPersonBios = () => {
    const person1 = new PersonBioModel("teddy", "poop", sidImage);
    const person2 = new PersonBioModel("pp", "haha", sidImage);
    const person3 = new PersonBioModel("harivansh", "sucks bad", sidImage);

    return [person1, person2, person3];
};

export default {getAllPersonBios};