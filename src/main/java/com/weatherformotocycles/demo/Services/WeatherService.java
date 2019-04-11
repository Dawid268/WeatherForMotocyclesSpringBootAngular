package com.weatherformotocycles.demo.Services;

import com.weatherformotocycles.demo.API.OWMApi;
import com.weatherformotocycles.demo.Model.Weather;
import net.aksingh.owmjapis.api.APIException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class WeatherService
{
    Set<String> cities;
    OWMApi owmApi;
    
    public Set<String> getCities(Set<String> citiesList)
    {
        cities = new HashSet<>();
        cities = citiesList;
        System.out.println(cities.size());
        return cities;
    }
    
    public List<Weather> getInformation() throws APIException
    {
        List<Weather> weatherList;
        owmApi = new OWMApi();
        weatherList = owmApi.WeatherService(cities);
        cities.clear();
        return weatherList;
    }
}
