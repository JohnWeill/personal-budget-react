import React from 'react';
import axios from 'axios';
import myChart from 'chart.js';

function HomePage() {
  return (
    <main classNameName="center" id="main">

        <div className="page-area">

            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Free</h1>
                <p>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </p>
            </div>

        </div>

    </main>
  );
}
export default class PersonList extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      )
    }
  }
export default HomePage;