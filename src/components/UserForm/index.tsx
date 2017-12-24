import * as React from 'react';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';
import '../../App.css';

export interface IUserFormProps {
    history: {
        push(path: string): void;
        replace(path: string): void;
    }
}

export interface IUserFormState {
    name: string;
}

export class UserFormImpl extends React.Component<IUserFormProps, IUserFormState> {
    constructor(prpps: any) {
        super(prpps);
        this.state = { name: '' }
    }

    handleInput = (event: any) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.props.history.push(`/${this.state.name}`)
    }

    renderLink = () => {
        return (
            <h1></h1>
        )
    }

    renderContent = () => {
        return (
            <form className="user-form" onSubmit={this.handleSubmit}>
                <h2 className="text-label">Enter your name to get your link:</h2>
                <FormControl
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInput}
                />
                <Button className="submit-button" type="submit">Get Link</Button>
            </form>
        )
    }

    render() {
        return this.renderContent()
    }
}
export function mapStateToProps() {
    return {
    };
}

export const UserForm = withRouter(connect<{}, {}, IUserFormProps>(mapStateToProps)(UserFormImpl) as any)

