import React, {useState, useEffect} from 'react';

import { 
SafeAreaView, 
StyleSheet, 
View, 
Text, StatusBar,
} from 'react-native'; 
import colors from './src/utils/color';
import Form from './components/Form';
import Footer from './components/Footer';
import Result from './components/Results';

export default function App(){ 

  const [nombre,setNombre]=useState(null);
  const [salario,setSalario]=useState(null);
  const [total, setTotal] = useState(null); 
const [errorMessage, setErrorMessage] = useState(''); 
useEffect(() => { 
if (nombre && salario ) calculate(); 
else reset(); 
}, [nombre, salario, ]); 
const calculate = () => { 
reset();

if (!nombre) { 
setErrorMessage('Añade un nombre'); 
} else if (!salario) { 
setErrorMessage('Añade el salario'); 
} else { 
const i = (salario * 0.12); 
const fee = salario - i; 
setTotal({ 
totalPayable: (fee).toFixed(2).replace('.', ','), 
}); 
} 
}; 
const reset = () => { 
setErrorMessage(''); 
setTotal(null); 
}; 
return ( 
<> 
<StatusBar barStyle="light-content" /> 
<SafeAreaView style={styles.safeArea}> 
<View style={styles.background} /> 
<Text style={styles.titleApp}>Calculador de Salario Base</Text> 
<Form 
setNombre={setNombre} 
setSalario={setSalario} 

/> 
</SafeAreaView> 

<Result 
nombre={nombre} 
salario={salario} 

total={total} 
errorMessage={errorMessage} 
/>

<Footer calculate={calculate} /> 
</> 
); 
}

const styles = StyleSheet.create({ 
safeArea: { 
height: 290, 
alignItems: 'center', 
}, 
background: { 
backgroundColor: colors.PRIMARY_COLOR, 
height: 200, 
width: '100%', 
borderBottomLeftRadius: 30, 
borderBottomRightRadius: 30, 
position: 'absolute', 
zIndex: -1, 
}, 
titleApp: { 
fontSize: 25, 
fontWeight: 'bold', 
color: '#fff', 
marginTop: 15, 
}, 
});





