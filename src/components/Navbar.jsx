import { Box, Button, Flex, IconButton, Input, Select } from "@chakra-ui/react";
import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../redux/AppReducer/Action";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [serch, setSearch] = useState("");
  const color = useSelector((e) => e.AppReducer.color);
  console.log(color);
  function Filter(e) {
    dispatch(GetData(e.target.value));
  }

  function ChangeTheame(e){
    if(e.target.value === "dark"){
      dispatch({type: "Change To Dark"})
    }else{
      dispatch({type: "Change To Light"})
    }
  }

  function Searching() {
    let value = "?language=" + serch;
    dispatch(GetData(value));
  }

  return (
    <Flex
      h={"80px"}
      pl={"0px"}
      pr={"30px"}
      bg={color[0]}
      alignItems={"center"}
      border={"1px solid"}
      borderColor={color[1]}
      justifyContent={"space-between"}
    >
      <Box>
        <ArrowBackIcon
          onClick={() => navigate("/")}
          cursor={"pointer"}
          color={"white"}
          h={"20px"}
          w={"80px"}
        />
      </Box>
      <Flex>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <IconButton
          onClick={Searching}
          aria-label="Search database"
          icon={<SearchIcon />}
        />
      </Flex>
      <Box>
        <Select onChange={Filter} placeholder="Filter By Role" name="role">
          <option value="?role=Frontend">Frontend</option>
          <option value="?role=Backend">Backend</option>
          <option value="?role=FullStack">FullStack</option>
          <option value="?role=UI/UX Designer">UI/UX Designer</option>
          <option value="?role=SEO Specialist">SEO Specialist</option>
        </Select>
      </Box>
      <Box>
        <Select onChange={ChangeTheame} >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </Select>
      </Box>
    </Flex>
  );
}

export default Navbar;
