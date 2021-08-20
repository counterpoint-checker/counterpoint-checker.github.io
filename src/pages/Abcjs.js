import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import abcjsObj from 'abcjs';

class Abcjs extends PureComponent {

    renderAbcNotation(abcNotation, parserParams, engraverParams, renderParams) {
        const res = abcjsObj.renderAbc(
            'id',
            abcNotation,
            parserParams,
            engraverParams,
            renderParams
        )
    }

    componentDidMount() {
        const { abcNotation, parserParams, engraverParams, renderParams } = this.props
        this.renderAbcNotation(abcNotation, parserParams, engraverParams, renderParams)
    }

    componentDidUpdate() {
        const { abcNotation, parserParams, engraverParams, renderParams } = this.props
        this.renderAbcNotation(abcNotation, parserParams, engraverParams, renderParams)
    }

    render() {
        return (
            <div id='id' style={{ width: '100%' }} />
        )
    }
}

Abcjs.propTypes = {
    abcNotation: PropTypes.string,
    parserParams: PropTypes.object,
    engraverParams: PropTypes.object,
    renderParams: PropTypes.object,
}

Abcjs.defaultProps = {
    abcNotation: '',
    parserParams: {},
    engraverParams: { responsive: 'resize' },
    renderParams: { viewportHorizontal: true },
}

export default Abcjs