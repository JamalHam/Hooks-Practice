import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is react',
        content: 'React is a frontend Javascript Framework',
    },
    {
        title: 'Why use react',
        content: 'React is a favourite js framework amongst engineers',
    },
    {
        title: 'How do you use react',
        content: 'you use react by creating components',
    }
];

const options = [
    {
        label: 'The colour Red',
        value: 'red'
    },
    {
        label: 'The colour Green',
        value: 'green'
    },
    {
        label: 'The colour Blue',
        value: 'blue'
    }
]


export default () => {
const [selected, setSelected] = useState(options[0]);
    return (
      <div>
        <Header />
        <Route path="/">
            <Accordion items={items} />
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <Dropdown
                label="Select a colour"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
      </div>
    );
  };
