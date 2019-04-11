package com.weatherformotocycles.demo.Controller;

import com.weatherformotocycles.demo.Model.Weather;
import com.weatherformotocycles.demo.Services.WeatherService;
import net.aksingh.owmjapis.api.APIException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
public class WeatherController
{
    
    @Autowired
    private WeatherService weatherService;
    
    @GetMapping("/info")
    public List<Weather> getWeather() throws APIException
    {
        return weatherService.getInformation();
    }
    
    @PostMapping("/add")
    public Set<String> postCities(@RequestBody Set<String> cities)
    {
        return weatherService.getCities(cities);
    }
}
