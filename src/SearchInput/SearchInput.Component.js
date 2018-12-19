import React, { Component } from 'react';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';
import { SearchInput } from './SearchInput';

export class SearchInputComponent extends Component {
    searchData = [
        { text: 'apple', callback: () => alert('apple') },
        { text: 'apricot', callback: () => alert('apricot') },
        { text: 'banana', callback: () => alert('banana') },
        { text: 'blueberry', callback: () => alert('blueberry') },
        { text: 'blackberry', callback: () => alert('blackberry') },
        { text: 'calabash', callback: () => alert('calabash') },
        { text: 'clementines', callback: () => alert('clementines') },
        { text: 'kiwi', callback: () => alert('kiwi') },
        { text: 'orange', callback: () => alert('orange') }
    ];

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    getInputValue(value) {
        this.setState({
            inputValue: value
        });

        setTimeout(
            function() {
                alert('You just set the inputValue of the state to ' + this.state.inputValue);
            }.bind(this),
            100
        );
    }

    searchInputCode = `<SearchInput
    placeholder="Enter a fruit"
    searchList={this.searchData}
    onEnter={term => this.getInputValue(term)}
/>

************************************ Data ************************************

getInputValue(value) {
    this.setState({
        inputValue: value
    });

    setTimeout(
        function() {
            alert('You just set the inputValue of the state to ' + this.state.inputValue);
        }.bind(this),
        1000
    );
}

searchData = [
    { text: 'apple', callback: () => alert('apple') },
    { text: 'apricot', callback: () => alert('apricot') },
    { text: 'banana', callback: () => alert('banana') },
    { text: 'blueberry', callback: () => alert('blueberry') },
    { text: 'blackberry', callback: () => alert('blackberry') },
    { text: 'calabash', callback: () => alert('calabash') },
    { text: 'clementines', callback: () => alert('clementines') },
    { text: 'kiwi', callback: () => alert('kiwi') },
    { text: 'orange', callback: () => alert('orange') }
];`;

    render() {
        return (
            <div>
                <Header>Search Input</Header>
                <Description />
                <Import module="SearchInput" path="/fundamental-react/src/" />

                <Separator />

                <Properties
                    type="Inputs"
                    properties={[
                        {
                            name: 'placeholder',
                            description: 'string - The text to use as placeholder when no text is entered.'
                        },
                        {
                            name: 'searchList',
                            description: 'array - Collection of items to display in auto-complete list.'
                        },
                        {
                            name: 'onEnter',
                            description: 'func - Method to execute by pressing the Enter key.'
                        }
                    ]}
                />

                <Separator />

                <DocsTile>
                    <div>
                        <SearchInput
                            placeholder="Enter a fruit"
                            searchList={this.searchData}
                            onEnter={term => this.getInputValue(term)}
                        />
                    </div>
                </DocsTile>
                <DocsText>{this.searchInputCode}</DocsText>

                <Separator />
            </div>
        );
    }
}
