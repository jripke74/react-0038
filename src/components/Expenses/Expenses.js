import { useState } from "react";

import Card from '../UI/Card';
import './Expense.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        
      </Card>
    </div>
  )
};

export default Expenses;
