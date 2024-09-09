
import heartt from "../Images/heartt.png";
export const Footer = () => {


  return (
    <div className=" flex justify-center align-middle w-auto  text-2xl pt-5 pr-2.5 pb-2 pl-2.5  mb-5 rounded-md shadow-2xl shadow-slate-400">
      <strong className="mx-1">
        <b>FoodZone</b>
      </strong>
      Created By
      <a
        className=" text-red-600 hover:text-purple-800 text-2xl mx-1 "
        href="https://www.linkedin.com/in/abhishek-kumar-79a636248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3By3Ab9CPvQ%2B6bFung4VQzpA%3D%3D"
        target="_blank"
        title="Abhishek Kumar's Linkedin Profile"
      >
        <b>Abhishek Kumar</b>
      </a>
      <div>with </div>
      <div className="text-2xl p-1 ">
        {" "}
        <img className="image w-9" src={heartt} alt="heart crossed"></img>{" "}
      </div>
      <a
        className=" text-red-600 hover:text-purple-800 text-2xl mx-1 "
        href="https://react.dev/"
        target="_blank"
        title="React offical web link"
      >
        ➡ <b>React</b>{" "}
      </a>
    </div>
  );

};





