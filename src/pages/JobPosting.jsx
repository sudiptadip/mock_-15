import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function JobPosting() {
  const [jobDetails, setJobDetails] = useState({});
  const [loading, setLoading] = useState(false);

  function AddData() {
    // https://new-mock-api-2.onrender.com/blogs
    if (
      jobDetails.company_name &&
      jobDetails.city &&
      jobDetails.location &&
      jobDetails.role &&
      jobDetails.level &&
      jobDetails.position &&
      jobDetails.language &&
      jobDetails.contract &&
      jobDetails.date
    ) {
      setLoading(true);
      axios
        .post("https://new-mock-api-2.onrender.com/blogs", jobDetails)
        .then(function (response) {
          setLoading(false);
          alert("successfuly data added");
        })
        .catch(function (error) {
          setLoading(false);
          console.log(error);
        });
    } else {
      alert("Fill all the input boxes");
    }
  }

  function SetData(e) {
    setJobDetails({
      ...jobDetails,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <Box>
      <Flex
        bg={"#FF6F61"}
        fontWeight={600}
        h={"80px"}
        color={"white"}
        fontSize={"23px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Link to={"/"}>Back To Home</Link>
        </Box>
      </Flex>
      {loading ? (
        <Box textAlign={"center"} mt={"10px"} fontSize={"xl"}>
          Loading...
        </Box>
      ) : (
        <FormControl
          p={"50px"}
          border={"1px solid black"}
          w={"450px"}
          margin={"auto"}
          mt={"50px"}
        >
          <Text textAlign={"center"} fontSize={"3xl"}>
            Add a new Job
          </Text>
          <FormLabel mt={"20px"}>Company name</FormLabel>
          <Input
            type="text"
            name="company_name"
            placeholder="Company name"
            onChange={SetData}
          />

          <FormLabel mt={"20px"}>City</FormLabel>
          <Input
            type="text"
            name="city"
            placeholder="City"
            onChange={SetData}
          />

          <FormLabel mt={"20px"}>Location</FormLabel>
          <Input
            type="text"
            name="location"
            placeholder="Location"
            onChange={SetData}
          />

          <Select mt={"20px"} placeholder="Role" name="role" onChange={SetData}>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="FullStack">FullStack</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="SEO Specialist">SEO Specialist</option>
          </Select>

          <Select
            mt={"20px"}
            placeholder="Level"
            name="level"
            onChange={SetData}
          >
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </Select>

          <Select
            mt={"20px"}
            placeholder="Position"
            name="position"
            onChange={SetData}
          >
            <option value="Backend Developer">Backend Developer</option>
            <option value="Junior Frontend Developer">
              Junior Frontend Developer
            </option>
            <option value="Junior Backend Developer">
              Junior Backend Developer
            </option>
            <option value="FSD">FSD</option>
          </Select>

          <Select
            mt={"20px"}
            placeholder="Language"
            name="language"
            onChange={SetData}
          >
            <option value="c">C</option>
            <option value="html">C++</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="css">Python</option>
          </Select>

          <Select
            mt={"20px"}
            placeholder="Contract"
            name="contract"
            onChange={SetData}
          >
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
          </Select>

          <FormLabel mt={"20px"}>Date</FormLabel>
          <Input
            type="date"
            name="date"
            placeholder="Date"
            onChange={SetData}
          />

          <Button
            mt={"30px"}
            w={"100%"}
            colorScheme={"twitter"}
            onClick={AddData}
          >
            Submit
          </Button>
        </FormControl>
      )}
    </Box>
  );
}

export default JobPosting;
