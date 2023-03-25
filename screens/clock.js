import React from "react";

const Clock = () => {
  return (
    <View class="clock">
      <View class="wrap">
        <span class="hour"></span>
        <span class="minute"></span>
        <span class="second"></span>
        <span class="dot"></span>
      </View>
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  