import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <Box>
      <Flex
        w={"100%"}
        h={"100vh"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        bg={"#FF6F61"}
      >
        <Box
          border={"2px solid white"}
          p={"20px"}
          pr={"40px"}
          pl={"40px"}
          boxShadow={"2xl"}
          color={"white"}
          fontSize={"19px"}
          fontWeight={"500"}
          bg={"#c44034"}
        >
          <Link to={"/jobpost"}>Post a New Job</Link>
        </Box>
        <Box
          border={"2px solid white"}
          p={"20px"}
          pr={"40px"}
          pl={"40px"}
          boxShadow={"2xl"}
          color={"white"}
          fontSize={"19px"}
          fontWeight={"500"}
          bg={"#c44034"}
        >
          <Link to={"/joblist"}>View all Jobs</Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Homepage;
