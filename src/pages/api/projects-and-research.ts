import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const research_publications = [
    {
      title:
        "National Research Foundation of (NRF) grant funded by the Korean Government (NRF – 2020R1A2C1012196)",
    },
    {
      title:
        "BK21 Plus project (SW Human Resource Development Program for Supporting Smart Life) funded by the Ministry of Education, Korea (21A20131600005)",
    },
  ];

  const publications = [
    {
      title:
        "Smart Data Processing for Energy Harvesting Systems using Artificial Intelligence",
      published_in: "Nano Energy, Volume 106",
    },
    {
      title:
        "Resource Management in Cloud and Cloud-Influenced Technologies for IoT Applications",
      published_in: "ACM Computing Surveys",
    },
  ];

  res.status(200).json({ research_publications, publications });
}
