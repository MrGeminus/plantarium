import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from 'react-bootstrap/Pagination';
import { useLang } from "../../context/LangContext";
import CareersTranslation from "./Careers.json"

const Careers = () => {
    const { lang } = useLang()!;
    const [jobs, setJobs] = useState([]);
    const translation = CareersTranslation[lang ? lang : "en"];

    const fetchData = async () => {
        const { data }: any = await axios("http://localhost:1337/api/jobs/")
        setJobs(data.data)
    }

    useEffect(() => {
        if (jobs.length === 0) {
            fetchData()
        }
    })
    return (
        <main id="main" className="flex-grow-1 py-5">
            <h1>{translation.title}</h1>
            <p className="mt-4">{translation.description}</p>
            <ListGroup as="ul" variant="flush">
                {jobs.map((job: any) => {
                    return (
                        <ListGroup.Item as="li" action variant="light" key={job?.id} >
                            <h2><Link to={`/${lang}/careers/${job?.id}`}>{job?.attributes?.job_title}</Link></h2>
                            <p>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
            <Pagination className="mt-3">
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </main >
    );
}

export default Careers;