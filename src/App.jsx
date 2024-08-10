import NavBar from "./components/Navbar";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import JobCard from "./components/JobCard/JobCard";
import "./index.css";
// import jobData from "./JobDummyData";
import { collection, query,where, orderBy, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async() => {
    setCustomSearch(false);
    const temp = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      temp.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(temp);
  }


  const fetchJobsCustom = async(jobCriteria) => {
    setCustomSearch(true);
    const temp = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience),where("location", "==", jobCriteria.location),orderBy("postedOn", "desc"))
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      temp.push({
        ...job.data(),
        id: job.id,
        postedOn:job.data().postedOn.toDate()
      })
    });
    setJobs(temp);
  }


  useEffect(() => {
   fetchJobs()
  }, [])
  

  return (
    <>
      <div>
        <NavBar />
        <Header />
        <SearchBar fetchJobsCustom={fetchJobsCustom}/>
        {customSearch && 
          <button onClick={fetchJobs} className="flex  pl-28 mb-5">
            <p className="bg-blue-300 px-10 py-2 rounded-md text-gray-800 font-bold">Clear Filters</p>
          </button>
        }
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </>
  );
}

export default App;
