import React  from 'react';

import Table from '../../components/table';
import Card from '../../components/card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const cardData = [
  {
    title: 'Total No. of Rides',
    subtitle: '152',
    text: '0.96% down from cancelled request'
  },
  {
    title: 'Revenue',
    subtitle: '$4780.54',
    text: 'from 152 rides'
  },
  {
    title: 'No. of service types',
    subtitle: '4',
    text: ''
  },
  {
    title: 'No. of scheduled rides',
    subtitle: '0',
    text: ''
  },
  {
    title: 'User Cancelled Count',
    subtitle: '106',
    text: ''
  },
  {
    title: 'Provider Cancelled Count',
    subtitle: '23',
    text: ''
  },
  {
    title: 'No of Providers',
    subtitle: '140',
    text: ''
  },
  {
    title: 'No. of Users',
    subtitle: '874',
    text: ''
  },
]

const MyCard = () => (
  <>
    {
      cardData
        .map(card => ({ ...card, key: card.title }))
        .map(card => <Card {...card} />)
    }
  </>
);

const columns = [
  {
    Header: 'Wallet Summary',
    columns: [{
      accessor: 'name',
    }, {
      accessor: 'amount',
    }
    ]
  }
]

const data = [
  { name: "Admin Credit", amount: "$1843.54" },
  { name: "Provider Credit", amount: "$278.97" },
  { name: "Provider Debit", amount: "$0.00" },
  { name: "Commission", amount: "$36.94" },
  { name: "Discount", amount: "$-441.15" },
  { name: "Tax Amount", amount: "$13.74" },
  { name: "Tips", amount: "$55.04" }
]

const ridesColumns = [
  {
    Header: 'Recent Rides',
    columns: [{
      accessor: 'id',
    }, {
      accessor: 'name',
    }, {
      accessor: 'time',
    }, {
      accessor: 'status',
    }
    ]
  }
]


const ridesData = [
  {id: 1, name: "Amanda Esposito", time: "1 week ago", status: "Canceled"}, 
  {id: 2, name: "Amanda Esposito", time: "1 week ago", status: "Complete"}, 
  {id: 3, name: "Amanda Esposito", time: "2 week ago", status: "Complete"}, 
  {id: 4, name: "Amanda Esposito", time: "2 week ago", status: "Canceled"}, 
  {id: 5, name: "Amanda Esposito", time: "3 week ago", status: "Complete"}, 
  {id: 6, name: "Amanda Esposito", time: "3 week ago", status: "Complete"}, 
  {id: 7, name: "Amanda Esposito", time: "4 week ago", status: "Complete"}, 
  {id: 8, name: "Amanda Esposito", time: "4 week ago", status: "Canceled"}, 
  {id: 9, name: "Amanda Esposito", time: "5 week ago", status: "Complete"}, 
  {id: 10, name: "Amanda Esposito", time: "5 week ago", status: "Complete"}
]

const BackgroundCheck = () => (
  <>
    <Container>
      <Row className="flex-row flex-wrap w-100 justify-content-between">
        <MyCard />
      </Row>
      <Row className="w-100 h-50">
        <Col sm={12} lg={5}>
          <Table columns={columns} data={data} />
        </Col>
        <Col sm={12} lg={7}>
        <Table columns={ridesColumns} data={ridesData} />
        </Col>
      </Row>
    </Container>

    <style jsx global> {`
     @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
     h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
      color: #878787;
    }
     `}
    </style>
  </>
);

export default BackgroundCheck