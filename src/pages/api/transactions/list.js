export default function handler(req, res) {
  return res.status(200).json([
    {
      value: 333.30,
      date: "04/04/2022",
      isDeposit: false
    },
    {
      value: 2350.30,
      date: "04/06/2002",
      isDeposit: true
    },
    {
      value: 250.30,
      date: "04/10/2021",
      isDeposit: false
    },
    {
      value: 1000,
      date: "09/11/2021",
      isDeposit: true
    },
    {
      value: 500.70,
      date: "21/05/2021",
      isDeposit: false
    },
    {
      value: 400.29,
      date: "05/03/2022",
      isDeposit: false
    },
  ])
}