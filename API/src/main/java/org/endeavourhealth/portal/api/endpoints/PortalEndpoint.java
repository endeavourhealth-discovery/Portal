package org.endeavourhealth.portal.api.endpoints;

import com.codahale.metrics.annotation.Timed;
import io.astefanutti.metrics.aspectj.Metrics;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.endeavourhealth.common.config.ConfigManager;

import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

@Path("/config")
@Metrics(registry = "PortalMetricRegistry")
@Api(description = "Initial api for all calls relating to the portal")
public class PortalEndpoint {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Timed(absolute = true, name = "PortalEndpoint.Config.Get")
    @ApiOperation(value = "Returns configuration data")
    public Response get(@Context SecurityContext sc) throws Exception {
        String config = ConfigManager.getConfiguration("applications");
        return Response
            .ok(config)
            .build();
    }
}
