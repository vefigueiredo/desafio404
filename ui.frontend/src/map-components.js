import CustomClasses from './components/CustomClasses/CustomClasses'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Select from './components/Select/Select'
import Header from './components/Header/Header'
import Header404 from './components/Header404/Header404'
import Ihavebad from './components/Ihavebad/Ihavebad'
import Thepage from './components/Thepage/Thepage'
import Espantalho from './components/Espantalho/Espantalho'
import Botaoback from './components/Botaoback/Botaoback'
import Createdby from './components/Createdby/Createdby'
import Footer from './components/Footer/Footer'
import Image from './components/Image/Image'
import Main from './components/Main/Main'
import Multifield from './components/Multifield/Multifield'
import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// Select Component Mapping
MapTo('vue/components/select')(Select, EditConfig)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

MapTo('vue/components/header404')(Header404)

MapTo('vue/components/ihavebad')(Ihavebad)

MapTo('vue/components/thepage')(Thepage)

MapTo('vue/components/espantalho')(Espantalho)

MapTo('vue/components/botaoback')(Botaoback)

MapTo('vue/components/createdby')(Createdby)

// Header Component Mapping
MapTo('vue/components/main')(Main, EditConfig)

// Footer Component Mapping
MapTo('vue/components/footer')(Footer, EditConfig)

// Multifield Component Mapping
MapTo('vue/components/multifield')(Multifield, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',
  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)
