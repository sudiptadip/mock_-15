import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

function JobCart({
  company_name,
  city,
  location,
  role,
  level,
  position,
  language,
  contract,
  date,
}) {
  const color = useSelector((e) => e.AppReducer.color);
  return (
    <Flex
      boxShadow={"xl"}
      p={"20px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"850px"}
      border={"1px solid"}
      borderColor={color[1]}
      color={color[1]}
    >
      <Flex>
        <Box h={"80%"} w={"100px"}>
          <Image
            w={"80%"}
            h={"80%"}
            borderRadius={"50px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUEwts4uoA2Zk4uGFSWayTNfoLgraSoxF2g&usqp=CAU"
          />
        </Box>
        <Box>
          <Box fontSize={"2xl"} fontWeight={"500"}>
            {company_name}
          </Box>
          <Box fontSize={"xl"} fontWeight={"400"}>
            {position}
          </Box>
          <Flex gap={"20px"}>
            <Box> Date :- {date}</Box>
            <Box>{location}</Box>
          </Flex>
        </Box>
      </Flex>
      <Flex gap={"20px"}>
        <Box>{role}</Box>
        <Box>{level}</Box>
        <Box>{language}</Box>
      </Flex>
    </Flex>
  );
}

export default JobCart;
