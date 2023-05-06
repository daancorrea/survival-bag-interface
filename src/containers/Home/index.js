import { Text, View } from 'react-native'
import data from '../../service/database/fake-db.json'

export const Home = () => {
    return (
        <>
            {data &&
                data.map(item => {
                    return (
                        <View>
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                            <View>
                                <Text>{item.type}</Text>
                            </View>
                            <View>
                                <Text>{item.quantity}</Text>
                            </View>
                            <View>
                                <Text>{item.createdAt}</Text>
                            </View>
                            <View>
                                <Text>{item.expirationAt}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </>
    )
}

