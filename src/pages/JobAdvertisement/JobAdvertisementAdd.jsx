import React, { useState } from "react";
import { Formik } from "formik";
import { Form, Input, TextArea } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";
import TypeOfWorkService from "../../services/TypeOfWorkService";
import WorkingTimeService from "../../services/WorkingTimeService";
import CityService from "../../services/CityService";
import JobPositionService from "../../services/JobPositionService";
import { useEffect } from "react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { toast } from "react-toastify";

export const JobAdvertisementAdd = () => {
  const [jobPositions, setJobPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  const [typeOfWorks, setTypeOfWork] = useState([]);
  useEffect(() => {
    let typeOfWorkService = new TypeOfWorkService();
    typeOfWorkService
      .getTypeOfWork()
      .then((result) => setTypeOfWork(result.data.data));
  }, []);

  const [workingTimes, setWorkingTime] = useState([]);
  useEffect(() => {
    let workingTimeService = new WorkingTimeService();
    workingTimeService
      .getWorkingTime()
      .then((result) => setWorkingTime(result.data.data));
  }, []);

  return (
    
    <Formik
      initialValues={{
        jobPosition: "",
        minSalary: 0,
        maxSalary: 0,
        releaseDate: "",
        deadline: "",
        definition: "",
        employer:{ userId: 76 },
        openPositions:1
      }}
      onSubmit= {async (values, { setSubmitting, resetForm }) => {
        console.log(values);
        console.log(typeOfWorks);

        values.typeOfWork = JSON.parse(values.typeOfWork);
        values.workingTime = JSON.parse(values.workingTime);
        values.city = JSON.parse(values.city);
        values.openPositions = JSON.parse(values.openPositions);
        values.jobPosition = JSON.parse(values.jobPosition);

        const result = new JobAdvertisementService().addAdvertisement(values);
        console.log((await result).data);
        console.log((await result).data.message);

        if ((await result).data.success)
        {
          console.log("çalıştı");
          toast.success((await result).data.message);
        } 
        //else toast.error(result.data.message);

        setTimeout(() => {
          setSubmitting(false);
          resetForm();
        }, 2000);
      }}
    >
      {({
        values,
        dirty,
        isSubmitting,
        handleSubmit,
        handleChange,
      }) => (
        <Form onSubmit={handleSubmit}>
          <h1 className="my-4 font-weight-bold .display-4">
            Job Advertisement Add
          </h1>
          <Form.Group widths="equal">
            <select
              style={{
                height: "37.8px",
                marginTop: "23px",
                width: "1130px",
              }}
              required
              id="jobPosition"
              onChange={handleChange}
            >
              <option value="" label="job positions.." />
              {jobPositions.map((jobPosition) => (
                <option
                  key={jobPosition.id}
                  value={JSON.stringify(jobPosition)}
                  label={jobPosition.title}
                />
              ))}
            </select>

            <select
              style={{
                marginLeft: "15px",
                height: "37.8px",
                marginTop: "23px",
                width: "1130px",
              }}
              required
              id="city"
              onChange={handleChange}
            >
              <option value="" label="city.." />
              {cities.map((city) => (
                <option 
                  key={city.id} 
                  value={JSON.stringify(city)} 
                  label={city.city} />
              ))}
            </select>

            <select
              style={{
                height: "37.8px",
                marginTop: "23px",
                width: "1130px",
                marginLeft: "15px",
              }}
              required
              id="typeOfWork"
              onChange={handleChange}
            >
              <option value="" label="Type of work.." />
              {typeOfWorks.map((typeOfWork) => (
                <option
                  key={typeOfWork.id}
                  value={JSON.stringify(typeOfWork)}
                  label={typeOfWork.typeOfWork}
                />
              ))}
            </select>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Input
              required
              type="number"
              id="minSalary"
              control={Input}
              label="Min Salary"
              placeholder="Min Salary"
              onChange={handleChange}
              value={values.minSalary}
            />
            <Form.Field
              type="number"
              required
              id="maxSalary"
              control={Input}
              onChange={handleChange}
              label="Max Salary"
              placeholder="Max Salary"
              value={values.maxSalary}
            />

            <select
              style={{
                height: "37.8px",
                marginTop: "23px",
              }}
              required
              id="workingTime"
              label="Working Time"
              onChange={handleChange}
            >
              <option value="" label="Working time.." />
              {workingTimes.map((workingTime) => (
                <option
                  key={workingTime.id}
                  value={JSON.stringify(workingTime)}
                  label={workingTime.workingTime}
                />
              ))}
            </select>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              required
              id="releaseDate"
              control={Input}
              type="date"
              label="Release date"
              value={values.releaseDate}
              onChange={handleChange}
            />
            <Form.Field
              required
              id="deadline"
              control={Input}
              type="date"
              label="Deadline"
              value={values.deadline}
              onChange={handleChange}
            />
            <Form.Field              
              required
              id="openPositions"
              control={Input}
              type="number"
              label="Open Position"
              placeholder="Open Position"
              value={values.openPositions}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Field
            required
            id="definition"
            control={TextArea}
            placeholder="Definition"
            label="Definition"
            value={values.definition}
            onChange={handleChange}
          />
          <button disabled={!dirty || isSubmitting} type="submit">
            Yayınla
          </button>
        </Form>
      )}
    </Formik>
  );
};
