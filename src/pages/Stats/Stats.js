import React, { useEffect, useState } from "react";
import BasicPie from "../../components/assets/PieChart";
import { useGetWorkStatusQuery } from "../../services/employee";
const Stats = () => {

  const {data:responseInfo} = useGetWorkStatusQuery();
  return <div>{ <BasicPie data={responseInfo?responseInfo:[]} /> }</div>;
};

export default Stats;
