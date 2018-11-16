import Vue from 'vue';
import Spinner from '~/components/feedback/Spinner';
import InputSimple from '~/components/InputSimple';
import Button from '~/components/general/Button';
import Icon from '~/components/general/Icon';
import InputText from '~/components/InputText';
import InputSelect from '~/components/InputSelect';
import Overline from '~/components/Overline';
import Badge from '~/components/Badge';
import UserCard from '~/components/UserCard';
import Ratio from '~/components/layout/Ratio';


Vue.component("Badge", Badge);
Vue.component("UserCard", UserCard);
Vue.component("Ratio", Ratio);

Vue.component("Spinner", Spinner);
Vue.component("Icon", Icon);
Vue.component("Button", Button);
Vue.component("InputSimple", InputSimple);
Vue.component("InputText", InputText);
Vue.component("InputSelect", InputSelect);
Vue.component("Overline", Overline);
