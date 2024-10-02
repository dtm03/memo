import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {switchSelectorStyles} from '../styles/switchSelectorStyles';
import colors from "../styles/colors";

const SwitchSelector = ({options, onSelect}) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSwitch = (option) => {
        setSelectedOption(option);
        onSelect(option.value);
    };

    return (
        <View style={switchSelectorStyles.switchContainer}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        switchSelectorStyles.option,
                        {backgroundColor: selectedOption.value === option.value ? colors.primaryColor : colors.secondaryColor},
                    ]}
                    onPress={() => handleSwitch(option)}
                >
                    {React.cloneElement(option.label, {
                        color: selectedOption.value === option.value ? colors.secondaryColor : colors.tertiaryColor,
                    })}
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default SwitchSelector;