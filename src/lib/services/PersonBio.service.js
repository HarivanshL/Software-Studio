import PersonBioModel from "../models/PersonBio.model";
import sidImage from "../../assets/sid.jpg";


const getAllPersonBios = () => {
    const person1 = new PersonBioModel("Nick", "bio", sidImage);
    const person2 = new PersonBioModel("Bri", "bio", sidImage);
    const person3 = new PersonBioModel("Harivansh", "bio", sidImage);
    const person4 = new PersonBioModel("Noah", "bio", sidImage);
    const person5 = new PersonBioModel("Matthew", "bio", sidImage);
    const person6 = new PersonBioModel("Safia", "Bio", sidImage);
    const person0 = new PersonBioModel("Mansoor Abdulak", "Leader", sidImage);


    return [person0, person1, person2, person3, person4, person5, person6];
};

export default {getAllPersonBios};