import { css, StyleSheet } from 'aphrodite'
import _ from 'lodash/fp'

const each = _.each.convert({ cap: false })

const getStateClassName = (className, state) => `${className}-${state}`

const stateClassNameToStyleSheetStyles = (className, context) => stateClassName => {
  if (_.startsWith('state.')(stateClassName)) {
    const state = _.replace('state.')('')(stateClassName)
    return context.styleSheet[getStateClassName(className, state)]
  }
  return context.styleSheet[stateClassName] || context.helperStyleSheet[stateClassName]
}

const toStateClassName = className => state => getStateClassName(className, state)

const separateSpecialKeys = context => {
  const specialKeys = {
    helpers: {},
    states: {},
    getStateFuncs: {},
    cssStyles: {}
  }

  each((classNameStyles, className) => {
    const { helpers, getState, states, ...cssStyles } = classNameStyles

    specialKeys.cssStyles[className] = cssStyles

    if (helpers) {
      specialKeys.helpers[className] = _.map(
        helperClassName => context.helperStyleSheet[helperClassName]
      )(helpers)
    }

    if (states) {
      const stateClassNames = _.mapKeys(toStateClassName(className))(states)
      specialKeys.cssStyles = _.assign(stateClassNames)(specialKeys.cssStyles)
    }

    if (getState) {
      specialKeys.getStateFuncs[className] = getState
    }
  })(context.styles)

  return { ...context, ...specialKeys }
}

const createStyleSheet = context => {
  const styleSheet = StyleSheet.create(context.cssStyles)
  return { ...context, styleSheet }
}

const wrapGetStateFunc = (context, className, getStateFunc) => (...args) => {
  const computedClassNames = [className, ..._.compact(getStateFunc(...args))]
  const classNameStyleSheets = _.map(
    stateClassNameToStyleSheetStyles(className, context)
  )(computedClassNames)
  return css(...classNameStyleSheets)
}

const createClassNameAccessor = context => {
  const accessor = {}

  each((classNameStyles, className) => {
    const getStateFunc = context.getStateFuncs[className]

    if (getStateFunc) {
      accessor[className] = wrapGetStateFunc(context, className, context.getStateFuncs[className])
    } else {
      let stylesToApply = [context.styleSheet[className]]
      const helperStyleSheetStyles = context.helpers[className]
      if (helperStyleSheetStyles) {
        stylesToApply = stylesToApply.concat(helperStyleSheetStyles)
      }
      accessor[className] = css(...stylesToApply)
    }
  })(context.cssStyles)

  return accessor
}

const stylesToClassNameAccessor = _.flow(
    separateSpecialKeys,
    createStyleSheet,
    createClassNameAccessor
)

export default (styles, helperStyleSheet) => stylesToClassNameAccessor({ styles, helperStyleSheet })
