package net.floodlightcontroller.topology.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.floodlightcontroller.devicemanager.IDevice;
import net.floodlightcontroller.devicemanager.internal.Device;
import net.floodlightcontroller.devicemanager.web.AbstractDeviceResource;
import net.floodlightcontroller.devicemanager.web.DeviceSerializer;
import net.floodlightcontroller.linkdiscovery.ILinkDiscovery.LinkDirection;
import net.floodlightcontroller.linkdiscovery.ILinkDiscovery.LinkType;
import net.floodlightcontroller.linkdiscovery.ILinkDiscoveryService;
import net.floodlightcontroller.linkdiscovery.LinkInfo;
import net.floodlightcontroller.linkdiscovery.web.LinkWithType;
import net.floodlightcontroller.restserver.RestletRoutable;
import net.floodlightcontroller.routing.Link;

import org.restlet.Context;
import org.restlet.Restlet;
import org.restlet.resource.Get;
import org.restlet.resource.ServerResource;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;


public class allinterlink extends ServerResource{

	    
	    @Get("json")
	    public Set<Typelink> retri(){
	  //  	GetJson test = new GetJson();
	    	Set<Typelink> all = new HashSet<Typelink>();
	    	
	    	StringBuilder json = new StringBuilder();
	        StringBuilder json1 = new StringBuilder(); 
	        StringBuilder json2 = new StringBuilder(); 
	        
	        String url ="http://localhost:8080/wm/topology/links/json";
	        String url1 ="http://192.168.75.138:8080/wm/topology/links/json";
	        String url2 ="http://192.168.75.139:8080/wm/topology/links/json";
	        
	            URL urlObject;
	            URL urlObject1;
	            URL urlObject2;
	            
				try {
					
					urlObject = new URL(url);
					URLConnection uc = urlObject.openConnection();  
		            BufferedReader in = new BufferedReader(new InputStreamReader(uc.getInputStream()));  
		            String inputLine = null;  
		            while ( (inputLine = in.readLine()) != null) {  
		                json.append(inputLine);
		            }  
		            
		          
		            String str = json.toString();
		     
		        
		            Gson gson = new Gson();
		     //       Set<Typelink> lst = new HashSet<Typelink>();
		            Typelink []field = gson.fromJson( str,Typelink[].class);
		            for(int i = 0;i<field.length;i++){
		            	all.add(field[i]);
		            }
		           
		      //      test.lst = lst;

		            
		            
		            
		            urlObject1 = new URL(url1);
					URLConnection uc1 = urlObject1.openConnection();  
		            BufferedReader in1 = new BufferedReader(new InputStreamReader(uc1.getInputStream()));  
		            String inputLine1 = null;  
		            while ( (inputLine1 = in1.readLine()) != null) {  
		                json1.append(inputLine1);
		            }  
		            
		          
		            String str1 = json1.toString();
		       
		        
		            Gson gson1 = new Gson();
		            
		     //       Set<Typelink> lst1 = new HashSet<Typelink>();
		         
		            Typelink []field1 = gson1.fromJson( str1,Typelink[].class);
		            for(int i = 0;i<field1.length;i++){
		            	all.add(field1[i]);
		            }
		           
		      //      test.lst1 = lst1;
		            
		            
		            
		            
		            
		            urlObject2 = new URL(url2);
					URLConnection uc2 = urlObject2.openConnection();  
		            BufferedReader in2 = new BufferedReader(new InputStreamReader(uc2.getInputStream()));  
		            String inputLine2 = null;  
		            while ( (inputLine2 = in2.readLine()) != null) {  
		                json2.append(inputLine2);
		            }  
		            
		          
		            String str2 = json2.toString();
		       
		        
		            Gson gson2 = new Gson();
		            
		    //        Set<Typelink> lst2 = new HashSet<Typelink>();
		         
		            Typelink []field2 = gson2.fromJson( str2,Typelink[].class);
		            for(int i = 0;i<field2.length;i++){
		            	all.add(field2[i]);
		            }
		           
		       //     test.lst2 = lst2;
		            
		     
		         
		            
		            in.close();   
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}  
	            
			return all;
	    	
	    }
	    
	}
